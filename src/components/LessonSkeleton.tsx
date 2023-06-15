import { Box, Skeleton } from "@mui/material";
import React, { useState } from "react";

export const LessonSkeleton = () => {
  const [loading, setLoading] = useState(true);
  return (
    <Box>
      {loading ? (
        <Skeleton width={250} height={250} animation="wave" />
      ) : (
        <img
          src="https://source.unsplash.com/random"
          alt="Random Image"
          width={250}
          height={145}
        />
      )}
    </Box>
  );
};
