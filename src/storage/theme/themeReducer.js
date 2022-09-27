import { CHANGE_MODE } from './actions'

const initialState = {
    settings: {
        mode: 'lightTheme',
        lightTheme: {
            appBackground: '#ffffff',
            primaryColor: '#1C1B1F',
            secondaryColor: 'rgba(28, 27, 31, 0.6)',
            arrow: 'arrowLight',
            search: 'searchLightMode',
            deleteIcon: 'deleteLightMode',
            modalWindows: {
                headerColor: '#1C1B1F',
                descrColor: 'rgba(28, 27, 31, 0.38)',
                modalShadow: '',
                input: {
                    inputBackground : '#FAF9FB',
                    inputBorder: '2px solid rgba(28, 27, 31, 0.38)'
                },
                cancelBtnColor: '5946D2',
                confirmBtn: {
                    btnBackground: '#F85977',
                    btnColor: '#FFFFFF'
                }
            },
            startPage:{
                descrColor: '#5835E5',
                unoIcon: 'unoPlatformLogo',
                backgroundColor: 'rgba(89, 70, 210, 0.08)',
                btnBackground: '#5946D2'
            },
            settingsWindow: {
                unActiveBtn: {
                    btnColor: '#A5A0AC',
                },
                activeBtns: {
                    btnColor: '#160067',
                    backgroundBtn: '#E5DFF9'
                },
                sighOutBtn: '#F85977'
            }, 
            iconStyles: {
                iconBackground: '#5946D2',
                iconColor: '#FFFFFF',
            },
            searchInput: {
                searchBackground: 'rgba(28, 27, 31, 0.08)',
                searchColor: '#1C1B1F',
                searchBorder: '2px solid rgba(28, 27, 31, 0.38)'
            },
            todosStyles: {
                todosBackground:'rgba(176, 162, 242, 1)',
                importantBackground: '#F85977',
                searchBackground : '#F4F4F4',
                onSurfaceLowBrush: 'rgba(255, 255, 255, 0.38'
            },
            inverseTabsColor: {
                color: '#9373FF',
                border: '1px solid #C8BFFF'
            },
            addButton: {
                addBackground: 'rgba(28, 27, 31, 0.16)',
            },
            dateInput:{
                shemeColor: 'white',
                border: '1px solid rgba(28, 27, 31, 0.12)'
            },
            tabsStyles: {
                unActiveTab: {
                    tabsColor: 'rgba(28, 27, 31, 0.38',
                    borderBottom: '1px solid #C8BFFF'
                }, 
                activeTab: {
                    tabsColor: '#5946D2',
                    borderBottom: '1px solid #5946D2'
                }
            }
            
        },
        darkTheme: {
            appBackground: '#201F24',
            primaryColor: '#E6E1E5',
            secondaryColor : 'rgba(230, 225, 229, 0.6)',
            arrow: 'arrowDark',
            search: 'searchDarkMode',
            deleteIcon: 'deleteDarkMode',
            modalWindows: {
                headerColor: '#E6E1E5',
                descrColor: 'rgba(230, 225, 229, 0.38)',
                input: {
                    inputBackground : '#49454F',
                    inputBorder: '2px solid rgba(230, 225, 229, 0.38)'
                },
                cancelBtnColor: '#9373FF',
                confirmBtn: {
                    btnBackground: '#9373FF',
                    btnColor: '#FFFFFF'
                }
            },
            startPage:{
                descrColor: '#CBBEFF',
                unoIcon: 'unoPlatformLogoDark',
                backgroundColor: 'rgba(200, 191, 255, 0.08)',
                btnBackground: '#9373FF'
            },
            settingsWindow: {
                unActiveBtn: {
                    btnColor: '#CAC4D0',
                },
                activeBtns: {
                    btnColor: '#E5DEFF',
                    backgroundBtn: '#474459'
                },
                sighOutBtn: '#D9415E'
            }, 
            iconStyles: {
                iconBackground: '#9373FF',
                iconColor: '#201F24',
            },
            searchInput: {
                searchBackground: 'rgba(230, 225, 229, 0.08)',
                searchColor: '#E6E1E5',
                searchBorder: '2px solid rgba(230, 225, 229, 0.38)'
            },
            todosStyles: {
                todosBackground:'rgba(84, 71, 148, 1)',
                importantBackground: '#F85977',
                searchBackground : '#252429',
                onSurfaceLowBrush: 'rgba(255, 255, 255, 0.5)'
            },
            inverseTabsColor: {
                color: '#5946D2',
                border: '1px solid #C8BFFF'
            },   
            addButton: {
                addBackground: 'rgba(230, 225, 229, 0.16)',
            },  
            dateInput:{
                shemeColor: 'dark',
                border: '1px solid rgba(230, 225, 229, 0.12)'
            },    
            tabsStyles: {
                unActiveTab: {
                    tabsColor: 'rgba(230, 225, 229, 0.38)',
                    borderBottom: '1px solid rgba(230, 225, 229, 0.38)'
                }, 
                activeTab: {
                    tabsColor: '#9373FF',
                    borderBottom: '1px solid #9373FF'
                }
            }
            
        },
    },
        color: 'purple',
        language: 'English'
}

function themeReducer (state = initialState, {type,payload}) {
    switch (type){
        case CHANGE_MODE: 
        return {
            ...state, 
            settings: {...state.settings, mode: payload.mode}
        }
        default: return state;
    }
}

export default themeReducer;