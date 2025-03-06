import { AppDispatch } from "@/app/store";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { useEffect } from "react";
import { fetchVideos } from "@/features/videos/videoSlice";
import { Link } from "react-router-dom";

const Videos = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { videos, error, loading } = useSelector(
    (state: RootState) => state.video
  );

  useEffect(() => {
    dispatch(fetchVideos());
  }, [dispatch]);

  // useEffect(() => {
  //   console.log("Videos", videos);
  // }, [videos]);

  if (loading) return <p>cargando Videos</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Videos</h1>
      <ul>
        {videos.map((video) => (
          <li key={video.id}>
            <h3>
              <Link to={`/video/${video.id}`}>
                {video.nombre} - {video.url}
              </Link>
            </h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Videos;
