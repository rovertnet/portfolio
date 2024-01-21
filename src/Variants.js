export const fadeIn = (direction, deley) => {
    return {
        hidden: {
            y: direction === 'up' ? 60 : direction === 'down' ? -60:0,
            opacity: 0,
            x: direction === 'left' ? 60 : direction === 'right' ? -60:0,
        },
        show: {
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
                type: 'tween',
                duration: 1.1,
                deley: deley,
                ease: [0.25, 0.25, 0.25, 0.50],
            }
        }
    }
}