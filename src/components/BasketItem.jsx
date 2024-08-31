export const BasketItem = ({ elm, add, minus, remove }) => {
    return (
        <tr>
            <td>{elm.name}</td>
            <td>{elm.price}</td>
            <td>{elm.count}</td>
            <td>{elm.count * elm.price}</td>
            <td>
                <button onClick={() => add(elm.id)} className="btn btn-success">+</button>
                <button onClick={() => minus(elm.id)} className="btn btn-warning">-</button>
                <button onClick={() => remove(elm.id)} className="btn btn-danger">X</button>
            </td>
        </tr>
    )
}
