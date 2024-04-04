import './styles.css';
// import '../../../public/img-json/dog2.png'
import { Image, Card } from 'antd';
import Meta from 'antd/es/card/Meta';



function PetCard({type,name,avatar,sex, age, city }){
return (
    <Card  hoverable  style={{ width: 300, fontSize:20 }}
    cover={<img alt="example" style={{borderRadius:'50%'}} src={require(`../../img-json/${avatar}`)} />}>
        <h3>{name}</h3>
        {/* <Meta title={name} style={{fontSize:30, fontWeight:700, border:'1px solid red'}} /> */}
        <p>{sex}, {age}</p>
        <h5>{city}</h5>

{/* 
    <div className='card'>
    <h1>{name}</h1>
    <Image src={require(`../../img-json/${avatar}`)} alt="dog" />
    <div>{sex}</div> */}
    {/* </div> */}
    </Card>
)
}
export default PetCard;