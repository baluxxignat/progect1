import './Simpson.css'

export default function Simpson({item: {name, surname, age, info, photo}}) {
    return (
        <div className={'xxx'}>

            <h2>{name} {surname}, age - {age} </h2>
            <img src={photo} alt="" />
            <div> {info}</div>

        </div>
    );


}