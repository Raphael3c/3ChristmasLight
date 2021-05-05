import '../styles/Circle.css';

export function Circle(props){

  const {color, glow, isUp, velocity} = props;


  function animation(glow, isUp){

    if(!isUp){
      return null;
    }

    return `glow-${glow} ${velocity}s infinite`
  }

  return ( 
    <div className="shape" 
      style={{
              backgroundColor: color, 
              animation: animation(glow, isUp)
      }}>
      
    </div>
  )
}