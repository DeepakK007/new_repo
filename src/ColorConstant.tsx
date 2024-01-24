export default function ColorConstant(colorCode:string = "",styleEx:object={}) {
    let colorObject: object = {};
    if (colorCode === "primary" || colorCode === "") {
        colorObject = {
            backgroundColor: "rgb(83, 83, 255)",
            color: "white",
            border:"1px solid rgb(83, 83, 255)"
          };
    }else if (colorCode === "secondary") {
        colorObject = { backgroundColor: "rgb(255, 146, 58)", color : "white",border:"1px solid rgb(83, 83, 255)"};
    }
    if(Object.keys(styleEx).length != 0){
        colorObject = Object.assign(colorObject,styleEx);
    }
    return colorObject;
}
