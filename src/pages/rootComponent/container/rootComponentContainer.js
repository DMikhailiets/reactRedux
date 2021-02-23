import { default as RootComponent } from '../component/rootComponent'
import { connect } from 'react-redux'
import { getData } from '../../../redux/reducers/simpleReducer'
import { fetchData } from '../../../redux/selectors'
import { useEffect } from 'react'

const mapStateToProps = (state) => ({
    data: fetchData(state)
})

let RootContainer = ({data, getData}) => {
    useEffect(() => {
        if (!data) {
            //getData()
        }
    },[data, getData])
    return <RootComponent data={data} getData={getData}/>
}

export default connect(mapStateToProps, {getData})(RootContainer)