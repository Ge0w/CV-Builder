const CVHeader = ({ infos }) => {
    return (
        <div>
            <h1>{infos.firstname} {infos.lastname}</h1>
            <h2>{infos.role}</h2>
        </div>
    )
}

export default CVHeader
