
function DetailPannel () {
    return (
        <div className="flex flex-col items-center gap-8 w-[250px] h-[180px] p-4 relative border-2 bg-gray-800 box-border font-bold group justify-center rounded-3xl">

            <div className="w-[100px] h-[100px] overflow-hidden rounded-full mt-[-45%] transition-all duration-100 group-hover:hidden">
                <img src="banner2.jpg" className="w-full h-full object-cover"></img>
            </div>
            
            <div className="flex flex-col gap-2">
                <h2 className="text-orange-300 text-lg">Kesbhat Kartik</h2>
                <h2 className="text-white text-sm">Graphic Designer</h2>
            </div>
            <div className="hidden py-2 px-4 text-lg font-extrabold rounded-full border border-orange-300 group-hover:block text-white">in</div>
        </div>
    )
}

export default DetailPannel;