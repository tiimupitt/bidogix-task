import { useState } from "react";
import classNames from "classnames";

export default function ProductCard({ product, onClick }) {
	const [hovering, setHovering] = useState(false);

	return (
		<div className="relative overflow-hidden rounded-2xl" onClick={onClick} onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}>

			{/* blurred hover background */}
			<div className={classNames([
				'absolute filter blur-3xl saturate-[10] -m-[1000px]  transition-all duration-150',
				hovering ? 'opacity-10' : 'opacity-0'
			])} >
				<img src={product?.image_url} className='w-full h-full object-cover ' />
			</div>

			{/* product info */}
			<div className="w-full relative overflow-hidden flex flex-col justify-center items-center p-8 cursor-pointer">
				<div className="w-full h-52 overflow-hidden">
					<img src={product?.image_url} className='w-full h-full object-contain mix-blend-multiply' />
				</div>
				<p className="mt-4 font-medium text-center">{product?.title}</p>
				<div className="" dangerouslySetInnerHTML={{ __html: product?.price_display }}></div>

			</div>
		</div>
	)
}