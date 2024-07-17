/**
 * @title 京东转链_京品库
 * @origin 傻妞官方
 * @create_at 2024-06-02 17:36:54
 * @description 🐶支持京东转链。
 * @author 佚名
 * @class 返利
 * @version v1.0.9
 * @form {key: "fanli.jd_union_id", "title": "京东联盟ID", required: true}
 * @form {key: "fanli.jd_jingpinku_appid", "title": "京品库APP_ID", required: true}
 * @form {key: "fanli.jd_jingpinku_appkey", "title": "京品库APP_KEY", required: true}
 * @form {key: "fanli.re_image", title: "重新配图", valueType: 'switch'}
 * @form {key: "fanli.debug", title: "调试开关", valueType: 'switch'}
 * @icon http://images.jingpinku.com/60f0fec16f2c7.png
 * @public false
 */

const fanli = Bucket("fanli")
const union_id = fanli.jd_union_id ?? ""
const appid = fanli.jd_jingpinku_appid ?? ""
const appkey = fanli.jd_jingpinku_appkey ?? ""
let content = s.getContent()

/** Here is hidden scripts AHgWbJEAJ+xAR7tdQXXZapNuO5HstO4dh3Ljame9/2iB1zW2Px5AasoiJXmBoHntHnAahFGGeSze8OCRRjBhmnnLGys9pyOsQRIU7eQark/vs+29oNJT76eBUVOuZrMqM5wktBGbzgGiD/dV8mN0PTVmFgx2a7vMwqAkOckMeMBfm7iYcGZU5CbciRj6+YIc9oL0otSyRW5VHFacqIp3noLIWlC6LdCRCfDBsJTookQScT6NiUJV75XLJcp1s/2yeXIGTT6I2W9RXcJK4FTSjNTYXSVibnv1C9sHUrAmyZfUmNzzro04QLUr5fR6o2qLQwJEwWg/A+e+xPZv2/JBrwGyJq2IBxdV6CeGSJJkboajXlHBgVC3eTJ9/9d9ftCfubefXif4idyTYTzN4DaIBfuWfEh6Nv0ZPBEAfU4xcUn90ACsvqbsUs4c6JQRjL6sKO4aIyM24WtO02ozmKTi5mY1eGEWGoXQCOrOrNA0YuuIka5NcvuJ/tv+uORyq7xIg3XIJh+t4hfZdFJURT35UpYlBO2yu+UQ3yJ3SAE8qmIsPc0wUh3lxLLqGlLlpSNgVr3UUgRPUoyeHHUwhOyAyjk05UGupQ25HqeKBbxj8tvDsHY8GwrWjng0YL5AetwDGxZ1QcK3s9oNlPzwoRo8pwx0JyzEdyIzl/1RBPLjyC/BSeI3cjroo0+Edoa2x0Ay+ICn0AYux8/a2BZ8uQjkjIZzWCDl6sN7HiufKS/RkbF4LigOk/K+7yjBAw9IDrMAeTb998dw+KN4eGHKZSYYsRkc0YPUnMcR4zLWh4OKIlA3wj+pXBkn8raMGNoAjDLMVguqZ/YkLAW4zOpHmcfaOu9HNmxFcZWBCsfvTPNud6HBBCr45k0Lqa53l6DXIr0oqqmMbH6BNMhCIdEU+9Ym+FVA6ypck8WdnmYY6Nm+k35v64FBziFpvBRTncxI7aiIyY7byNyYkO7Jks/WnIBfRmf4dS4Mr8OB0TScS7MA9l2H1om7NITxgltfT2XeGzNrdg0Re+dgKIsnTp4x14qS18LoivbmRfV3Hkj0ON3OyjC4YzdfYUHsQtB42bDF6YWehgrLJJg8JDr3xPR1EGv17Q== */



