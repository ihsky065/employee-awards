function EmployeeAward ({name, years}) {
    return (
        <div>
            <h2><strong>{name}</strong></h2>
            <p>Years at Company: {years} </p>
            {years >= 5 ? 'Eligible for Long Service Award 🎉' : 'Not Eligible'}
        </div>
    )
}

function App () {
    return(
        <>
        <h1>Employee Award</h1>
        <EmployeeAward name={'Alice Tan'} years={2}/>
        </>
    )
}
export default App;