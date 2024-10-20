import Card from "./Card"; // Make sure to adjust the path based on your folder structure

const advanceCourseData = [
  {
    title: "Artificial Intelligence",
    imageSrc: "/_next/static/media/AI.39397d24.jpg", // Replace with actual image path
    altText: "Artificial Intelligence",
    link: "/compulsory/1",
  },
  {
    title: "Web 3 and Metaverse",
    imageSrc: "/_next/static/media/metaverse.06eccb60.jpg", // Replace with actual image path
    altText: "Web 3 and Metaverse",
    link: "/compulsory/2",
  },
  {
    title: "Cloud-Native Computing",
    imageSrc: "/_next/static/media/cloudComputing.7260492c.jpg", // Replace with actual image path
    altText: "Cloud-Native Computing",
    link: "/compulsory/3",
  },
  {
    title: "Ambient Computing and IoT",
    imageSrc: "/_next/static/media/iot.16f7b003.jpg", // Replace with actual image path
    altText: "Ambient Computing and IoT",
    link: "/compulsory/4",
  },
  {
    title: "Genomics and Bioinformatics",
    imageSrc: "/_next/static/media/genomics.b87789f1.jpg", // Replace with actual image path
    altText: "Genomics and Bioinformatics",
    link: "/advance/1",
  },
  {
    title: "Network Programmability and Automation",
    imageSrc: "/_next/static/media/automation.a77dbbe8.jpg", // Replace with actual image path
    altText: "Network Programmability and Automation",
    link: "/advance/2",
  },
];

const AdvanceCourse = () => {
  return (
    <div className="xl:w-[1300px] lg:w-[90%] w-[95%] m-auto mt-10 mb-10 roboto-bold">
      <h1 className="lg:text-4xl sm:text-4xl text-2xl sm:text-left text-center text-main font-extrabold mt-10 text-[#054e83]">
        Advanced Courses Sequence
      </h1>
      <div className="grid xl-lg:grid-cols-4 sm:grid-cols-4 grid-cols-1 xl-lg:gap-10 gap-5 mt-10">
        {advanceCourseData.map((course, index) => (
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

export default AdvanceCourse;
