import { Skeleton } from "@nextui-org/skeleton";

const SkeletonPage = ({ count }: { count: number }) => {
  return (
    <div className="flex flex-wrap ssm:w-full px-4 justify-evenly rounded-lg ssm:flex-col md:flex-row ssm:items-center hover">
      {Array.from({ length: count }).map((_, index) => (
        <Skeleton
          key={index}
          className="ssm:w-[20rem] sm:w-[23rem] min-h-[13rem] py-4 px-8 my-4 shadow-custom rounded-md relative hover:scale-105 transform duration-200 cursor-pointer"
        >
          <h3 className="ssm:text-[1.2rem] sm:text-[1.4rem] font-semibold line-clamp-1"></h3>
          <p className="text-gray-900 line-clamp-2"></p>
          <div className="my-3 flex flex-wrap"></div>
          <div className="flex justify-between">
            <span className="inline-block mt-3 ssm:text-[.8rem] md:text-[.9rem] text-grayPrimary bottom-5"></span>
            <span className="inline-block mt-3 ssm:text-[.8rem] md:text-[.9rem] text-grayPrimary bottom-5"></span>
          </div>
        </Skeleton>
      ))}
    </div>
  );
};

export default SkeletonPage;