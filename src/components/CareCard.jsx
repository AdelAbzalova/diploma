import { Card } from 'antd';
function CareCard({title,img, link }){
    return (
        <a href={link} target="_blank" style={{textDecoration:'none', marginBottom:100}} rel="noopener noreferrer">
        
           <Card  hoverable  style={{ width: 300, fontSize:20, height:350 }}
    cover={<img alt="example" style={{width:300, height:200}}  src={require(`../images/tips/${img}`)} />}>
        <h4>{title}</h4>
        </Card>
        </a>
    )
}

export default CareCard;