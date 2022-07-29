import React from 'react'
import "./Navbar.css"

function Navbar() {
  return (
    <div className='navbar'>
        <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix logo" />
        <input className='search' type="text" placeholder="Search.."></input>
        <button className='searchbutton'><img className='searchimage' src="https://img.icons8.com/ios-glyphs/344/search--v1.png" alt="" /></button>
        <img className='avatar' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIcAAACHCAMAAAALObo4AAAAYFBMVEUNfoD///8Ae30AdngAcnT5/Pzx9/cAbW+Htrfq8/Nfn6DI3d4Aam3e6+u21NXV4+MpiIpypaaEsLFqoaI9jpCuz9CUwMFRmJq+2Nl1ra6nyss0h4hGjpBmp6iPurunw8MaAKz9AAACNklEQVR4nO3Z6ZLqIBAFYNKdkAVNUMnqMu//loPjlqgVoWTudarO98typD0sJoERAgAAAAAAAAAA4MOQ9d8LEutVti4EB0vBYpNlG8FeUdjUMoqiJM9EmDEh3cjEVpSN9ijIbR6ddUFykK4uBSv3IKSjGxViaji/Fczdm3WjHFH//ohQMy44OPaMzLhVpN7PofNxQbl1a8XZJEe0ezcItdOCe7eCcTdt1r6bg/tpwYPbxHxKjl+fF8eVf9ds+WYKaztZp4lx7Vg1buY4inNoGBcsXWNMfrhV6OuYdL+gci+vMZwHcQ7dbhR54dExbtWp1RDoPse6PE+K8RpfikX/9bXnYPd9iskW7EXs2y9i9ntWcKoYtCAAAADAX/IZD0PEu6ELdbZzqhgfHzl92+j6eCgU4AThWtKoKFHG5wmWqb1snNfBgtDPlk82W8cjQPuxXiWXPUwTaonQ5lxTDjp9OSjEqRmW461qqPGg1WjjmZmZHQZxLIpmHMK2CJTC2spRXVllO010H8a+QWK375bJJEVS+hxdvsDraGqpmrXmRRqfpQsyq0bdZThuLFvvLd1sEKHuv+FnF12p0lJV/uyvUV57Hii/RlSoh87OSvK1CXxkf0rCbemRpNw8rKBwSeLeaVDyukiDLosHLEyv8pksiVwOhevl7h32DmqvEOXThSnVsDG/Nh3PssRprFeHoe5UZamuHg4rw4uY/8FI3Ieh63+cji9CH+MAAAAAAAAAAAAAAADAn/MNZQ4UAdq9Rq4AAAAASUVORK5CYII=" alt="Avatar" />
    </div>
  )
}

export default Navbar