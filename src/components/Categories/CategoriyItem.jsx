import styled from 'styled-components'
import './categories.css'


const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`
const CategoryItem = ({item}) => {
  return (
    <Container>
      <img src={item.img} alt=""/>
      <div className="Info">
        <div className="Category_Title"><h1>{item.title}</h1></div>
        <button className='Categories_button'>SHOP NOW</button>
      </div>
    </Container>
  )
}

export default CategoryItem