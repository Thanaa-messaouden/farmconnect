import Messages from '../Composantes/Messages.js';
import Input from '../Composantes/Input.js';
import React from 'react'


function randomName() {
    const adjectives = [
      'autumn', 'hidden', 'bitter', 'misty', 'silent', 'empty', 'dry', 'dark',
      'summer', 'icy', 'delicate', 'quiet', 'white', 'cool', 'spring', 'winter',
      'patient', 'twilight', 'dawn', 'crimson', 'wispy', 'weathered', 'blue',
      'billowing', 'broken', 'cold', 'damp', 'falling', 'frosty', 'green', 'long',
      'late', 'lingering', 'bold', 'little', 'morning', 'muddy', 'old', 'red',
      'rough', 'still', 'small', 'sparkling', 'shy', 'wandering',
      'withered', 'wild', 'black', 'young', 'holy', 'solitary', 'fragrant',
      'aged', 'snowy', 'proud', 'floral', 'restless', 'divine', 'polished',
      'ancient', 'purple', 'lively', 'nameless'
    ];
    const nouns = [
      'waterfall', 'river', 'breeze', 'moon', 'rain', 'wind', 'sea', 'morning',
      'snow', 'lake', 'sunset', 'pine', 'shadow', 'leaf', 'dawn', 'glitter',
      'forest', 'hill', 'cloud', 'meadow', 'sun', 'glade', 'bird', 'brook',
      'butterfly', 'bush', 'dew', 'dust', 'field', 'fire', 'flower', 'firefly',
      'feather', 'grass', 'haze', 'mountain', 'night', 'pond', 'darkness',
      'snowflake', 'silence', 'sound', 'sky', 'shape', 'surf', 'thunder',
      'violet', 'water', 'wildflower', 'wave', 'water', 'resonance', 'sun',
      'wood', 'dream', 'cherry', 'tree', 'fog', 'frost', 'voice', 'paper', 'frog',
      'smoke', 'star'
    ];
    const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const noun = nouns[Math.floor(Math.random() * nouns.length)];
    return adjective + noun;
  }
  
  function randomColor() {
    return '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16);
  }



const Test = () => {
    function onSendMessage(message) {
        const newMessage = {
          data: message,
          member: me
        }
        setMessages([...messages, newMessage])
      }
  return (
    <div>
        
        <Messages messages={messages} me={me}/>
<Input
  onSendMessage={onSendMessage}
/>
    </div>
  )
}

export default Test