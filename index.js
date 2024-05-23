var findMedianSortedArrays = function(nums1, nums2) {
    let length = (nums1.length + nums2.length)/2-1,sn=false,i1=0,i2=0,arr=[],n1,n2;
    if(length < 0){
         if(1 == nums1.length){
         return nums1[0];
          }
          if(1 == nums2.length){
         return nums2[0];
          }
    }
    else if(Number.isInteger(length)){
        sn=false;
    }else{
        sn=true;
        length=Math.round(length);
    }
    while(i1<nums1.length || i2<nums2.length){
        n1=i1 < nums1.length ?nums1[i1]: "n";
        n2=i2 < nums2.length ?nums2[i2]: "n";
        if(n1==n2){
        if(i1=="n"){
        i2++;
        }else{
        i1++;
        }
                    arr.push(n1);
        }else if(n1!='n' && (n1<n2 || n2=="n")){
            arr.push(n1);
            if(length<arr.length-1){
                if(sn){
                    return arr[length];
                }else{
                    return (arr[length]+arr[length+1]) /2;
                }
            }
            i1++;
        }else{
            arr.push(n2);
            if(length<arr.length-1){
                if(sn){
                    return arr[length];
                }else{
                    return (arr[length]+arr[length+1]) /2;
                }
            }
            i2++;
        }
    } 
};
findMedianSortedArrays([1,3],[2])