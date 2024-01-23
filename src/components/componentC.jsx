import { useContext } from "react";
import { ChannelContext, UserContext } from "../App";


// function ComponentC() {
//   return ( 
//     <div>
//       <ChannelContext.Consumer>
//         {
//           channel => {
//             return(
//             <UserContext.Consumer>
//               {
//                 user => {
//                   return <div>user context value {user}, channel context value {channel}</div>
//                 }
//               }
//             </UserContext.Consumer>
//           )}
//         }
//         </ChannelContext.Consumer>
//     </div>
//   );
// }
// export default ComponentC;

function ComponentC() {
  const user = useContext(UserContext)
  const channel = useContext(ChannelContext)
  return (
    <div>user context value {user}, channel context values {channel}</div>
  )
}
export default ComponentC;
