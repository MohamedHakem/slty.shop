export const SellerBuyerSafetyNotice = () => { 
  return (
    <div className="flex flex-col gap-2 p-3 md:p-4 border rounded-xl text-[#dc7609] bg-[#fffaf5]">
      <h2 className="inline text-xl font-medium">سلامتك تهمنا</h2>
      <ul className="list-disc *:list-inside flex flex-col gap-1">
        <li>تأكد من البائع قبل الدفع</li>
        <li>تحقق من السلعة قبل الشراء</li>
        <li>قابل البائع في مكان عام زي المترو او المولات</li>
        <li>خد حد معاك وانت رايح تقابل البائع او المشتري</li>
        <li>عاين المنتج كويس قبل ماتشتري</li>
        <li>تأكد ان سعر المنتج مناسب</li>
        <li>متدفعش او تحول فلوس الا لما تعاين المنتج كويس </li>
        {/* <li>إحترس من العروض المبتذلة</li> */}
        {/* <li>تحقق من سمعة البائع</li> */}
        {/* <li>تحقق من تقييمات البائع</li> */}  
      </ul>
    </div>
  )
}