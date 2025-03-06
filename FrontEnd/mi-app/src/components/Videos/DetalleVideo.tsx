import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideoById } from "@/features/videos/videoSlice";
import { RootState, AppDispatch } from "@/app/store";

const convertToEmbedUrl = (url: string): string | null => {
  const regex =
    /(?:youtu\.be\/|youtube\.com\/(?:.*v=|.*\/v\/|.*\/embed\/|.*watch\?v=))([^&?\n]+)/;
  const match = url.match(regex);
  return match ? `https://www.youtube.com/embed/${match[1]}` : null;
};

const DetalleVideo = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch<AppDispatch>();
  console.log("ID", id);

  const { videoID, loading, error } = useSelector(
    (state: RootState) => state.video
  );
  console.log(
    "Estado completo:",
    useSelector((state: RootState) => state.video)
  );

  useEffect(() => {
    if (id) {
      dispatch(fetchVideoById(id));
    }
  }, [dispatch, id]);

  if (loading) return <p>Cargando Video...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!videoID) return <p>El video no existe</p>;

  const embedUrl = convertToEmbedUrl(videoID.url);
  if (!embedUrl) return <p>Error</p>;

  return (
    <div>
      <h1>Detalle del Video</h1>
      <p>{videoID.nombre}</p>
      <iframe
        width="600"
        height="350"
        src={embedUrl}
        title="Video de YouTube"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default DetalleVideo;
