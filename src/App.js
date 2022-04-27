import React, {useEffect} from "react";
import {BrowserRouter as Router} from "react-router-dom"
import {useRouters} from "./components/routes";
import {Context} from "./context/context";
import {useAuth} from "./hooks/auth.hook";
import {Header} from "./components/pages/Header&Footer/Header";
import './App.css';
import 'materialize-css'
import {Footer} from "./components/pages/Header&Footer/Footer";


function App() {
    const { token, login, logout, userId, ready, user, update } = useAuth()

    let isAuthenticated;

    if (token) {
        isAuthenticated = true
    } else {
        isAuthenticated = false
    }



    const routes = useRouters(isAuthenticated)


    return (

        <div className="app_container">
            <Router>

                <Context.Provider value={{
                    token, login, logout, userId, isAuthenticated, ready, user, update
                }}>
                    <Header/>
                    <div className={'component'}>
                        {
                            routes
                        }

                    </div>
                    <Footer/>
                </Context.Provider>

            </Router>
        </div>
    );
}

export default App;

// const [currentBoard, setCurrentBoard] = useState(null)
// // const [currentItem, setCurrentItem] = useState(null)
//
// function dragOverHandler (e){
//     e.preventDefault()
//     if (e.target.className === "item") {
//         e.target.style.boxShadow = '0 4px 3px gray'
//     }
// }
//
// function dragLeaveHandler (e){
//     e.target.style.boxShadow = 'none'
// }
//
// function dragStartHandler (e, board) {
//     setCurrentBoard(board);
// }
//
// function dragEndHandler (e) {
//     e.target.style.boxShadow = 'none'
// }
//
// console.log(currentBoard)
// function dropHandler(e,board) {
//     e.preventDefault()


    // const currentIndex = currentBoard.items.indexOf(currentItem);
    // currentBoard.items.splice(currentIndex,1)
    // //
    // // const boardIndex = board.items.indexOf(item)
    // // board.items.splice(boardIndex+1, 0, currentItem)
    //
    // setBoards(boards.map(b =>{
    //     if (b.id === board.id){
    //         return board
    //     }
    //     if (b.id === currentBoard.id){
    //         return currentBoard
    //     }
    //     return b
    // }))
// }

// function dragCartHandler (e,board){
//     board.items.push(currentItem)
//     const currentIndex = currentBoard.items.indexOf(currentItem)
//     console.log(currentIndex)
//
//     currentBoard.items.splice(currentIndex,1)
//
//     setBoards(boards.map(b =>{
//         if (b.id === board.id){
//             return board
//         }
//         if (b.id === currentBoard.id){
//             return currentBoard
//         }
//         return b
//     }))
// }
//    boards.map(board =>
//        <div*/}
//           onDragOver={(e) => dragOverHandler(e)}*/}
//             draggable={(e) => dragCartHandler(e,board)
//             className={"board"}>
//             <div className={"board_title"}>Зробити</div>
//             {
//                 board.items.map(item =>
//                     <div>
//                         onDragOver={(e) => dragOverHandler(e)}
//                         onDragLeave={(e) => dragLeaveHandler(e)}
//                        onDragStart={(e) => dragStartHandler(e,board, item)}
//                         onDragEnd={(e) => dragEndHandler(e)}
//                     onDrag={(e) => dropHandler(e, board, item)}
//                         draggable={true}
//                         className={"item"}
//                     >{item.title}</div>
//                 )
//
//        </div>
//   )
// }
