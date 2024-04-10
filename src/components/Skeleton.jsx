export function TextSkeleton() {
  return (
    <div
      role="status"
      className="flex flex-col justify-center items-center space-y-2.5 animate-pulse max-w-screen opacity-0 dark:opacity-10 mt-5 md:mt-10"
    >
      <div className="flex justify-center items-center w-full">
        <div className="mt-2 h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-32"></div>
        <div className="mt-2 h-4 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
        <div className="mt-2 h-4 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-60"></div>
      </div>
      <div className="flex items-center w-full max-w-[480px]">
        <div className="mt-2 h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
        <div className="mt-2 h-4 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
        <div className="mt-2 h-4 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
      </div>
      <div className="flex items-center w-full max-w-[400px]">
        <div className="mt-2 h-4 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
        <div className="mt-2 h-4 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
        <div className="mt-2 h-4 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
      </div>
      <div className="flex items-center w-full max-w-[480px]">
        <div className="mt-2 h-4 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
        <div className="mt-2 h-4 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
        <div className="mt-2 h-4 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
      </div>
      <div className="flex items-center w-full max-w-[440px]">
        <div className="mt-2 h-4 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-32"></div>
        <div className="mt-2 h-4 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
        <div className="mt-2 h-4 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
      </div>
      <div className="flex items-center w-full max-w-[360px]">
        <div className="mt-2 h-4 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
        <div className="mt-2 h-4 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
        <div className="mt-2 h-4 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
}

export function ListSkeleton() {
  return (
    <div
      role="status"
      className="max-w-md animate-pulse space-y-4 divide-y divide-gray-200  border border-gray-200 p-4 shadow md:p-6 dark:divide-gray-700 dark:border-gray-700 opacity-0 dark:opacity-10 mt-5 md:mt-10 rounded-3xl ml-16"
    >
      <div className="flex items-center justify-between">
        <div>
          <div className="mb-2.5 h-2.5 w-24 rounded-full bg-gray-300 dark:bg-gray-600"></div>
          <div className="h-2 w-32 rounded-full bg-gray-200 dark:bg-gray-700"></div>
        </div>
        <div className="h-2.5 w-12 rounded-full bg-gray-300 dark:bg-gray-700"></div>
      </div>
      <div className="flex items-center justify-between pt-4">
        <div>
          <div className="mb-2.5 h-2.5 w-24 rounded-full bg-gray-300 dark:bg-gray-600"></div>
          <div className="h-2 w-32 rounded-full bg-gray-200 dark:bg-gray-700"></div>
        </div>
        <div className="h-2.5 w-12 rounded-full bg-gray-300 dark:bg-gray-700"></div>
      </div>
      <div className="flex items-center justify-between pt-4">
        <div>
          <div className="mb-2.5 h-2.5 w-24 rounded-full bg-gray-300 dark:bg-gray-600"></div>
          <div className="h-2 w-32 rounded-full bg-gray-200 dark:bg-gray-700"></div>
        </div>
        <div className="h-2.5 w-12 rounded-full bg-gray-300 dark:bg-gray-700"></div>
      </div>
      <div className="flex items-center justify-between pt-4">
        <div>
          <div className="mb-2.5 h-2.5 w-24 rounded-full bg-gray-300 dark:bg-gray-600"></div>
          <div className="h-2 w-32 rounded-full bg-gray-200 dark:bg-gray-700"></div>
        </div>
        <div className="h-2.5 w-12 rounded-full bg-gray-300 dark:bg-gray-700"></div>
      </div>
      <div className="flex items-center justify-between pt-4">
        <div>
          <div className="mb-2.5 h-2.5 w-24 rounded-full bg-gray-300 dark:bg-gray-600"></div>
          <div className="h-2 w-32 rounded-full bg-gray-200 dark:bg-gray-700"></div>
        </div>
        <div className="h-2.5 w-12 rounded-full bg-gray-300 dark:bg-gray-700"></div>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
}
