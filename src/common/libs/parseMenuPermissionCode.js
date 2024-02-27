import menuTree from '#/assets/data/menuTree.json'

/**
 * 권한 코드("M101R")를 메뉴 트리 객체와 권한("R", "U", "A")으로 파싱하는 유틸 함수
 * @param {string} menuPermissionCode
 * @returns {object} { menuObj, permissionCode }
 */
export const parseMenuPermissionCode = (menuPermissionCode) => {
    const menuCode = menuPermissionCode.slice(1, 4)
    const permissionCode = menuPermissionCode.slice(-1)
    const menuObj = menuTree.find((item) => item.menuId == menuCode)

    return { menuObj, permissionCode }
}
