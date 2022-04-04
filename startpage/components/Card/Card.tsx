import CardIf from '../../interfaces/Card';

const Card: React.FC<CardIf> = ({title, elements}: CardIf) => {
    const links = elements.map((elem) =>
        <li className='py-1' key={elem}>
            <a href='#' className='text-gray-600 hover:text-gray-900'>{elem}</a>
        </li>
    );

    return (
        <div className='border border-gray-200'>
            <div className='flex flex-col items-center'>
                <div className='text-2xl'>{title}</div>
                <ul>
                    {links}
                </ul>
            </div>
        </div>
    )
}

export default Card;
