import { Routes, Route } from "react-router-dom";
import { Landing, Error, MeetupDetail } from "../pages";

// export const Router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Landing />,
//   },
//   {
//     path: "*",
//     element: <Error />,
//   },
//   {
//     path: "/:meetupTitle",
//     element: <MeetupDetail />,
//   },
// ]);

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="*" element={<Error />} />
      <Route path="/:meetupTitle" element={<MeetupDetail />} />
    </Routes>
  );
};
