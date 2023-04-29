function Dog({dog}){
    return (
        <div>
            <h2>name: {dog.name}</h2>
            <h2>age: {dog.age}</h2>
            <h2>breed: {dog.breed}</h2>
            <h2>favoriteToy: {dog.favoriteToy}</h2>
            <h2>gender: {dog.gender}</h2>
            <hr/>
        </div>
    )
}

export default Dog;