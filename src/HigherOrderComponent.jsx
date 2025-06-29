
// const WithMessage = (WrappedComponent) => {
//     return (props) => {
//         return <WrappedComponent {...props} />;
//     };
// };

// const Hello = (props) => {
//     return (
//         <div>
//             <h1>This is Hello Component</h1>
//         </div>
//     );
// };

// const Enhanced = WithMessage(Hello);



// Usage
// <Enhanced />  // This will render the Hello component


// Usage
// <Enhanced />  // This will render the Hello component





const WithMessage = (WrappedComponet) => {
    return (props) => (
        <div>
            <WrappedComponet {...props} />
        </div>
    )
}
const Hello = (props) => {
    return (
        <div>
            <h1>This HoC Components {props.name}</h1>
        </div>
    )
}
const Enhanced = WithMessage(Hello)
export default function App() {
    return <Enhanced name="suma" />
}

// const WithMessage = (WrappedComponet) => {
//     return (props) => {
        
//         <WrappedComponet {...props} />
//     }
// }
// const Hello = (props) => {
//     return (
//         <div>
//             <h1>this is Hello Componet</h1>
//         </div>
//     )
// }
// const Enhanced = WithMessage(Hello)




