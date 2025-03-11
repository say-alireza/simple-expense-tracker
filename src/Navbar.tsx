interface Props 
{
    cartItemsCount : number 
}

 const Navbar = ({cartItemsCount}:Props) => {
  return (
    <div> Navbar  : {cartItemsCount}</div>
  )
}
 export default Navbar