import { Video, VideoState } from "./type";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchVideosApy, fetchVideosApyById } from "./api";

const initialState: VideoState = {
  videos: [],
  videoID: null,
  loading: false,
  error: null,
};

export const fetchVideos = createAsyncThunk<Video[]>(
  "videos/fetchVideos",
  async () => {
    const response = await fetchVideosApy();
    return response;
  }
);

export const fetchVideoById = createAsyncThunk<Video, string>(
  "videos/fetchVideoById",
  async (id: string) => {
    const response = await fetchVideosApyById(id);
    return response;
  }
);
const videosSlice = createSlice({
  name: "video",
  initialState,
  reducers: {
    clearError(state) {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      //videos
      .addCase(fetchVideos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchVideos.fulfilled, (state, action) => {
        // console.log("Videos recibidos:", action.payload);
        state.loading = false;
        state.videos = action.payload;
      })
      .addCase(fetchVideos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error?.message || "Error al obtener los videos";
      })

      .addCase(fetchVideoById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchVideoById.fulfilled, (state, action) => {
        state.loading = false;
        state.videoID = action.payload;
      })
      .addCase(fetchVideoById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error?.message || "Error al obtener el video";
      });
  },
});

export const { clearError } = videosSlice.actions;
export default videosSlice.reducer;
