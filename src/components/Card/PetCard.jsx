import './styles.css';
import { Card } from 'antd';
import { Link } from 'react-router-dom';



function PetCard({id, type,name,avatar,gender, age, city }){
return (
    <Link to={`/pets/${id}`} style={{textDecoration:'none'}}>
    <Card  hoverable  style={{ width: 300, fontSize:20 }}
    cover={<img alt="example" style={{borderRadius:'50%'}} src={require(`../../img-json/${avatar}`)} />}>
        <h3>{name}</h3>
        <p>{gender}, {age}</p>
        <h5>{city}</h5>
    </Card>

</Link>
)
}
export default PetCard;