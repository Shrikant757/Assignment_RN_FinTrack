import { useState } from "react"
import { KeyboardAvoidingView, Platform, Text, View } from "react-native"
import { Chip } from "react-native-paper"
import { useSelector } from "react-redux"
import { AddCategory } from "./AddCategory"

export const Category = ({ onSelected, onlyShowAllCategories }) => {
    const [openAddCategoryPopUp, setOpenAddCategoryPopUp] = useState(false)
    const items = useSelector(store => store.RootReducer.category)
    const [selectable, setSelectable] = useState([])
    const handleChipPress = (chip) => {
        setSelectable(chip)
        onSelected(chip)
    };
    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' && 'padding'} style={{ paddingTop: 16 }}>
            {onlyShowAllCategories ?

                <View />
                : <Text style={{ paddingRight: 10 }}>Select Category : </Text>
            }
            <View style={{ flexDirection: "row", paddingTop: 5 }}>
                {openAddCategoryPopUp &&
                    <AddCategory open={openAddCategoryPopUp} onDismiss={() => setOpenAddCategoryPopUp(false)} />}
                {
                    items.map((el, index) => {
                        return (
                            <Chip
                                selected={selectable.includes(el)}
                                selectedColor={selectable.includes(el) ? "green" : 'black'}
                                key={index}
                                disabled={onlyShowAllCategories}
                                onPress={() => {
                                    if (onSelected) {
                                        handleChipPress(el)
                                    } else {
                                        null
                                    }
                                }}
                                style={{ marginRight: 10, backgroundColor: 'yellow' }}
                                icon={selectable.includes(el) ? () => <MaterialCommunityIcons name="check" size={20} color="white" /> : null}
                            >{el}</Chip>
                        )
                    })
                }
                {!onlyShowAllCategories && <Chip style={{ backgroundColor: "grey" }} onPress={() => setOpenAddCategoryPopUp(true)}>Add Category</Chip>}
            </View>
        </KeyboardAvoidingView>
    )
}