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
* sideEffect 를 수행(mount / unmount / update)
* 클래스형 컴포넌트의 componentDidMount와 componentDidUpdate 가 합쳐진 형태
* 사용예시
    ```js
        useEffect(() => {
            console.log('useEffect');
            console.log('name : ', name );
        }, [name]);
        // useEffect(mount때 할 작업, [update시 작업 관리하는것(배열로 보내주기!)])
        // useEffect(하나만) 쓰면 mount, update 때 모두 발생
        // update cycle 에 조건을 줄수 있는 것이 장점!! 
    ```
