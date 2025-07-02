import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { showToastMessage } from "../common/uiSlice";
import api from "../../utils/api";
import { initialCart } from "../cart/cartSlice";

export const loginWithEmail = createAsyncThunk(
  "user/loginWithEmail",
  async ({ email, password }, { dispatch, rejectWithValue }) => {
    try {
      const response = await api.post("/auth/login", { email, password });
      if (response.status === 200) {
        // 1. local storage: browser가 꺼지거나 새로 창을 열어도 유지
        // 2. session storage: browser가 꺼지면 유지 놉, 새로고침은 유지
        sessionStorage.setItem("token", response.data.token);
      }
      // 성공 - LoginPage
      return response.data;
    } catch (err) {
      // 실패
      // 1. 실패 토스트 메세지를 보여준다
      dispatch(
        showToastMessage({
          message: "로그인을 실패했습니다.",
          status: "error",
        })
      );

      // 2. 에러값을 reducer에 저장
      return rejectWithValue(err.message);
    }
  }
);

export const loginWithGoogle = createAsyncThunk(
  "user/loginWithGoogle",
  async (token, { rejectWithValue }) => {
    try {
      const response = await api.post("/auth/google", { token });

      if (response.status === 200) {
        sessionStorage.setItem("token", response.data.token);
      } else {
        throw new Error(response.error);
      }

      return response.data.user;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const logout = () => (dispatch) => {
  sessionStorage.removeItem("token");
  dispatch(userSlice.actions.logout());
};

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (
    { email, name, password, navigate },
    { dispatch, rejectWithValue }
  ) => {
    try {
      const response = await api.post("/user", { email, name, password });

      // 1. 성공 토스트 메시지 보여주기
      dispatch(
        showToastMessage({
          message: "회원가입을 성공했습니다.",
          status: "success",
        })
      );
      // 2. 로그인 페이지로 리다이렉트
      navigate("/login");

      return response.data.data;
    } catch (err) {
      // 1. 실패 토스트 메시지 보여주기
      dispatch(
        showToastMessage({
          message: "회원가입을 실패했습니다.",
          status: "error",
        })
      );
      // 2. 에러값을 저장한다
      return rejectWithValue(err.message);
    }
  }
);

export const loginWithToken = createAsyncThunk(
  "user/loginWithToken",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/user/me");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    loading: false,
    loginError: null,
    registrationError: null,
    success: false,
  },
  // 직접적으로 아이템 호출될 떄
  reducers: {
    clearErrors: (state) => {
      state.loginError = null;
      state.registrationError = null;
    },
    logout: (state) => {
      state.user = null;
      state.loginError = null;
    },
  },
  // async처럼 외부의 함수를 통해 호출될 떄
  extraReducers: (builder) => {
    builder
      // registerUser
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.loading = false;
        state.registrationError = null;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.registrationError = action.payload;
      })
      // loginWithEmail
      .addCase(loginWithEmail.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginWithEmail.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.loginError = null;
      })
      .addCase(loginWithEmail.rejected, (state, action) => {
        state.loading = false;
        state.loginError = action.payload;
      })
      // loginWithToken
      .addCase(loginWithToken.fulfilled, (state, action) => {
        state.user = action.payload.data;
      })
      // loginWithGoogle
      .addCase(loginWithGoogle.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginWithGoogle.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.loginError = null;
      })
      .addCase(loginWithGoogle.rejected, (state, action) => {
        state.loading = false;
        state.loginError = action.payload;
      });
  },
});
export const { clearErrors } = userSlice.actions;
export default userSlice.reducer;
