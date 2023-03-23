'use client';
import React, { useRef, useState, useMemo, useEffect, MouseEvent } from 'react'
import { useTransition } from '@react-spring/web'

const Message = () => {
  const config = {
    tension: 125,
    friction: 20,
    precision: 0.1
  }
  const timeout = 3000
  const [items, setItems] = useState([])

  const transitions = useTransition(items, {
    from: { opacity: 0, transform: 'translate3d(0,-40px,0)' },
    keys: item => item.key
    enter: item => async (next, cancel) => {
      cancelMap.set(item, cancel);
      await next({opacity: 1, height: 'auto',    })
      await next({life: '0%'})
    },
    leave: [{opacity: 0}, {height: 0}],
    onRest: (item) => setItems(state => state.filter(i => i.key !== item.key)),
    config: (item, index, phase) => key => phase === 'enter' && key === 'life' ? {duration: timeout} : config
  });

  useEffect(() => {
    (msg) => {
      setItems(state => [...state, { key: id++, msg }])
    }
  }, []);

  return (
    <div>
      {transitions(({ life, ...style }, item) => (
        <animated.div className="message" style={style}>
          {item.msg}
        </animated.div>
      ))}
    </div>
  )

}export default Message;