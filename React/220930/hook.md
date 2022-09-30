## Hook 
* react의 새로운 기능 
* 클래스 컴포넌트에만 가능했던 state(상태관리)와 lifecycle이 가능하도록 도와주는 기능 
* 사용 규칙
    * 최상위 단계에서만 호출 가능 
        * 최상위 컴포넌트 X
        * 반복문, 조건문, 중첩된 함수 내부에서 호출하면 안된다는 것 
    * Hook은 오로지 React **함수형 컴포넌트** 안에서만 호출 가능!! 
* 종류 
    * useState()
    * useEffect()
    * useReducer()
    * useMemo()
    * useCallback()
    * useRef()

## useState()
* 함수형 컴포넌트에서 상태 관리를 위해 사용하는 것(동적 상태관리)
* 가장 기본적인 Hook으로 함수형 컴포넌트에서 가변적인 상태를 지니게해준다
* 클래스형 컴포넌트에서의 State

## useEffect()