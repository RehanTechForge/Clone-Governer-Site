import Card from "./Card"; // Make sure to adjust the path based on your folder structure

const coreCourseData = [
  {
    title: "Programming Fundamentals",
    imageSrc: "/programming_fundamentals.49cca4e9.jpg",
    altText: "Programming Fundamentals",
    link: "/compulsory/1",
  },
  {
    title: "Web2 Using NextJS",
    imageSrc: "/nextjs.3dff0f70.jpg",
    altText: "NextJS",
    link: "/compulsory/2",
  },
  {
    title: "Earn as You Learn",
    imageSrc: "/earn_as_your_learn.b8248a49.jpg",
    altText: "Earn as You Learn",
    link: "/compulsory/3",
  },
];

const CoreCourse = () => {
  return (
    <div className="lg:w-[90%] w-[95%] m-auto mt-10 mb-10 roboto-bold">
      <h1
        className="lg:text-4xl sm:text-4xl text-2xl sm:text-left text-center text-main font-extrabold mt-10 text-[#054e83] 
      "
      >
        Core Courses Sequence
      </h1>
      <div className="grid xl-lg:grid-cols-4 sm:grid-cols-4 grid-cols-1 xl-lg:gap-10 gap-5 mt-10">
        {coreCourseData.map((course, index) => (
          <Card
            key={index}
            title={course.title}
            imageSrc={course.imageSrc}
            altText={course.altText}
            link={course.link}
          />
        ))}
      </div>
    </div>
  );
};

export default CoreCourse;
