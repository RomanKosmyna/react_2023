// 1. Описати всю сім'ю сімпсонів (5 персонажів)
export const SimpsonComponent = ({name, img, desc}) => {
    return (
        <div className={'characterBlock'}>
            <h2>{name}</h2>
            <img src={img} alt={name}/>
            <p>{desc}</p>
        </div>
    )
}