export function TextSkeleton() {
  return (
    <div
      role="status"
      class="flex flex-col justify-center items-center space-y-2.5 animate-pulse max-w-screen opacity-0 dark:opacity-10 mt-5 md:mt-10"
    >
      <div class="flex justify-center items-center w-full">
        <div class="mt-2 h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-32"></div>
        <div class="mt-2 h-4 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
        <div class="mt-2 h-4 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-60"></div>
      </div>
      <div class="flex items-center w-full max-w-[480px]">
        <div class="mt-2 h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
        <div class="mt-2 h-4 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
        <div class="mt-2 h-4 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
      </div>
      <div class="flex items-center w-full max-w-[400px]">
        <div class="mt-2 h-4 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
        <div class="mt-2 h-4 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
        <div class="mt-2 h-4 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
      </div>
      <div class="flex items-center w-full max-w-[480px]">
        <div class="mt-2 h-4 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
        <div class="mt-2 h-4 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
        <div class="mt-2 h-4 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
      </div>
      <div class="flex items-center w-full max-w-[440px]">
        <div class="mt-2 h-4 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-32"></div>
        <div class="mt-2 h-4 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
        <div class="mt-2 h-4 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
      </div>
      <div class="flex items-center w-full max-w-[360px]">
        <div class="mt-2 h-4 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
        <div class="mt-2 h-4 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
        <div class="mt-2 h-4 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
      </div>
      <span class="sr-only">Loading...</span>
    </div>
  );
}

export function ListSkeleton() {
  return (
    <div
      role="status"
      class="max-w-md animate-pulse space-y-4 divide-y divide-gray-200  border border-gray-200 p-4 shadow md:p-6 dark:divide-gray-700 dark:border-gray-700 opacity-0 dark:opacity-10 mt-5 md:mt-10 rounded-3xl ml-16"
    >
      <div class="flex items-center justify-between">
        <div>
          <div class="mb-2.5 h-2.5 w-24 rounded-full bg-gray-300 dark:bg-gray-600"></div>
          <div class="h-2 w-32 rounded-full bg-gray-200 dark:bg-gray-700"></div>
        </div>
        <div class="h-2.5 w-12 rounded-full bg-gray-300 dark:bg-gray-700"></div>
      </div>
      <div class="flex items-center justify-between pt-4">
        <div>
          <div class="mb-2.5 h-2.5 w-24 rounded-full bg-gray-300 dark:bg-gray-600"></div>
          <div class="h-2 w-32 rounded-full bg-gray-200 dark:bg-gray-700"></div>
        </div>
        <div class="h-2.5 w-12 rounded-full bg-gray-300 dark:bg-gray-700"></div>
      </div>
      <div class="flex items-center justify-between pt-4">
        <div>
          <div class="mb-2.5 h-2.5 w-24 rounded-full bg-gray-300 dark:bg-gray-600"></div>
          <div class="h-2 w-32 rounded-full bg-gray-200 dark:bg-gray-700"></div>
        </div>
        <div class="h-2.5 w-12 rounded-full bg-gray-300 dark:bg-gray-700"></div>
      </div>
      <div class="flex items-center justify-between pt-4">
        <div>
          <div class="mb-2.5 h-2.5 w-24 rounded-full bg-gray-300 dark:bg-gray-600"></div>
          <div class="h-2 w-32 rounded-full bg-gray-200 dark:bg-gray-700"></div>
        </div>
        <div class="h-2.5 w-12 rounded-full bg-gray-300 dark:bg-gray-700"></div>
      </div>
      <div class="flex items-center justify-between pt-4">
        <div>
          <div class="mb-2.5 h-2.5 w-24 rounded-full bg-gray-300 dark:bg-gray-600"></div>
          <div class="h-2 w-32 rounded-full bg-gray-200 dark:bg-gray-700"></div>
        </div>
        <div class="h-2.5 w-12 rounded-full bg-gray-300 dark:bg-gray-700"></div>
      </div>
      <span class="sr-only">Loading...</span>
    </div>
  );
}
