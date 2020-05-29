import React from "react";


export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
}

export function SearchArea(props) {
  return (
    <div className="form-group">
      <textarea className="form-control" rows="5" {...props} />
    </div>
  );
    }


// export function Col({ size, children }) {
//     return (
//         <div
//           className={size
//             .split(" ")
//             .map(size => "col-" + size)
//             .join(" ")}
//         >
//           {children}
//         </div>
//       );
//           }


          export function Row({ size, children }) {
            return (
                <div
                  className={size
                    .split(" ")
                    .map(size => "row-" + size)
                    .join(" ")}
                >
                  {children}
                </div>
              );
                  }
        
