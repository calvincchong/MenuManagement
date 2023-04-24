'use client';
import AddItemForm from '../../components/AddItemForm';
import tcss from '../../styles/globaltailwind';
import DragCarousel from '../../components/DragCarousel';

const heading =
  'mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white';
const paragraph =
  'mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400';

const InternalDirectory = () => {
  return (
    <div className="flex-col">
      <DragCarousel />
      <div className="flex justify-center mt-5 ">
        <h1 className={tcss.h1}>Internal Directory</h1>
      </div>
      <div className="border-2 flex justify-center p-3">
        <AddItemForm />
      </div>
    </div>
  );
};

export default InternalDirectory;
