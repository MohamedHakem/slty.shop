import { AddNewItemMultiStep } from '@/components/dashboard/add-new-item-multi-step'

export default function AddNewItemPage() {
  return (
    <div className="flex min-h-[calc(100vh-60px)] h-full w-full flex-col bg-muted/70 justify-center">
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          {/* <div className="mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4"> */}
            <div className="mx-auto w-full flex-1 md:min-w-[400px] max-w-[497px] md:max-w-[500px] bg-white rounded-3xl overflow-hidden">
              <AddNewItemMultiStep />
            </div>
          {/* </div>   */}
        </main>
      </div>
    </div>
  )
}
