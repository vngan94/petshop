import DogCard from "../DogCard/DogCard"
const Dogs = (props) => {
    const { allDogs } = props

    return (
        <>

            <section className="dogs-container">
                {allDogs.map(item => {
                    return (
                        <div key={item.id}>
                            <DogCard dog={item} />
                        </div>
                    )
                })}
            </section>


        </>

    )
}
export default Dogs
