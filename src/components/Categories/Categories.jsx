import { categories } from '../../data'
import styled from 'styled-components'
import CategoryItem from './CategoriyItem'

const Container = styled.div`
        display: flex;
        padding: 20px;
        justify-content: space-between;
        position: relative;
`

const Categories = () => {
  return (
    <Container>
    {categories.map(item=>(
        <CategoryItem item={item}/>
    ))}

    </Container>
  )
}

export default Categories