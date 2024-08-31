import { useEffect, useState } from 'react'
import { BasketItem } from './BasketItem'


export const Basket = ({ cart, add, minus, remove }) => {
	const [count, setCount] = useState(0)

	useEffect(() => {
		const totalItems = cart.reduce((acc, item) => acc + (item.count || 0), 0)
		setCount(totalItems)
	}, [cart])

	return <div className="col-md-5">
		<h1>count :{count}</h1>
		<table className="table table-dark table-bordered">
			<thead>
				<tr>
					<th>Product</th>
					<th>Price</th>
					<th>Count</th>
					<th>Subotal</th>
					<th>Actions</th>
				</tr>
			</thead>
			<tbody>
				{
					cart.map((elm) => <BasketItem elm={elm} add={add} key={elm.id} minus={minus} remove={remove} />)
				}
			</tbody>
		</table>
	</div>
}