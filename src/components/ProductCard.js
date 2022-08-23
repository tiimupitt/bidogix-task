import { useState } from "react"

export default function ProductCard({ product }) {
	// const [hovering, setHovering] = useState(false);

	return (
		<div className="relative overflow-hidden" >
			{/* <div className="absolute filter blur-sm  opacity-50 -m-60" >
				<img src={product?.image_url} className='w-full h-full object-cover ' />
			</div> */}

			<div className="w-full relative overflow-hidden flex flex-col justify-center items-center">


				<div className="w-full h-52">
					<img src={product?.image_url} className='w-full h-full object-contain' />
				</div>

				<p className="mt-4 font-medium text-center">{product?.title}</p>
				<div className="" dangerouslySetInnerHTML={{ __html: product?.price_display }}></div>




			</div>
		</div>
	)
}