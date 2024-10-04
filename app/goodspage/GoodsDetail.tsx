import { View, Image, Dimensions, StyleSheet, Text, Button, SafeAreaView, ScrollView } from 'react-native';
import React from 'react';

import GoodsSlides from '@/components/goodspage/GoodsSlides';
import GoodsInfo from '@/components/goodspage/GoodsInfo';
import Footer from '@/components/goodspage/Footer';
import { GoodProps } from '@/types';
import { useLocalSearchParams } from 'expo-router';
import Header from '@/components/goodspage/Header';
const items: GoodProps = {
    id: '1',
    title: '叮咚鸡叮咚鸡大狗大狗叫叫叫，带兴奋兴奋剂，一段一段带一段',
    images: ['https://pic1.zhimg.com/v2-119565438456235a942996a574800eb8_b.jpg', 'https://picx.zhimg.com/v2-0bdd648c59f9ab3fb91c54933f7b0c21_b.jpg'],
    price: 9999999.12,
    description:
        '叮咚鸡叮咚鸡大狗大狗叫叫叫，带兴奋兴奋剂，一段一段带一段叮咚鸡叮咚鸡大狗大狗叫叫叫，带兴奋兴奋剂，一段一段带一段叮咚鸡叮咚鸡大狗大狗叫叫叫，带兴奋兴奋剂，一段一段带一段叮咚鸡叮咚鸡大狗大狗叫叫叫，带兴奋兴奋剂，一段一段带一段叮咚鸡叮咚鸡大狗大狗叫叫叫，带兴奋兴奋剂，一段一段带一段，叮咚鸡叮咚鸡大狗大狗叫叫叫，带兴奋兴奋剂，一段一段带一段叮咚鸡叮咚鸡大狗大狗叫叫叫，带兴奋兴奋剂，一段一段带一段叮咚鸡叮咚鸡大狗大狗叫叫叫，带兴奋兴奋剂，一段一段带一段',
    user: {
        name: 'brynn',
        avatar:
            'https://images.pexels.com/photos/598745/pexels-photo-598745.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb',
        id: '1',
        rating: 4.5,
    },
    tags: ['tag1', 'tag2', 'tag3'],
}

const GoodsDetail = () => {
    const {id} = useLocalSearchParams();
    // todo: 根据id获取商品信息
    return (
        <> 
            <SafeAreaView style={styles.container}>
            <Header title={items.title} />
            <ScrollView style={styles.scrollView}>
                <GoodsSlides {...items} />
                <GoodsInfo {...items} />
            </ScrollView>
            <Footer />
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        flex: 1,
        marginBottom: 50,
    }
})

export default GoodsDetail