import useLayoutStore from '#/store/useLayoutStore'

export const permissionLabelColor =
    useLayoutStore.getState().themeMode === 'light'
        ? {
              C: '#FA5E41',
              R: '#00418D',
              U: '#5B0584',
              D: '#DB0024',
              A: '#006761',
          }
        : {
              C: '#FA5E41',
              R: '#0057BB',
              U: '#8D00D0',
              D: '#DB0024',
              A: '#008880 ',
          }
