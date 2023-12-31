PGDMP     .    #                {            asub    9.6.20    9.6.20 !    v           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                       false            w           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                       false            x           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                       false            y           1262    17549    asub    DATABASE     �   CREATE DATABASE asub WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'English_United States.1252' LC_CTYPE = 'English_United States.1252';
    DROP DATABASE asub;
             postgres    false                        2615    2200    public    SCHEMA        CREATE SCHEMA public;
    DROP SCHEMA public;
             postgres    false            z           0    0    SCHEMA public    COMMENT     6   COMMENT ON SCHEMA public IS 'standard public schema';
                  postgres    false    3                        3079    12387    plpgsql 	   EXTENSION     ?   CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;
    DROP EXTENSION plpgsql;
                  false            {           0    0    EXTENSION plpgsql    COMMENT     @   COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';
                       false    1            �            1259    17557    admin    TABLE     �   CREATE TABLE public.admin (
    name character varying(80) NOT NULL,
    email character varying(80) NOT NULL,
    admin_id character(10) NOT NULL,
    password character varying(300) NOT NULL
);
    DROP TABLE public.admin;
       public         postgres    false    3            �            1259    17621 	   classroom    TABLE     �   CREATE TABLE public.classroom (
    name character varying(30) NOT NULL,
    classroom_id character(10) NOT NULL,
    teacher_id character(10),
    number_of_students numeric(3,0) DEFAULT 0
);
    DROP TABLE public.classroom;
       public         postgres    false    3            �            1259    17579 
   department    TABLE     �   CREATE TABLE public.department (
    department_id character(10) NOT NULL,
    admin_id character(10),
    name character varying(80) NOT NULL
);
    DROP TABLE public.department;
       public         postgres    false    3            �            1259    17647    student    TABLE       CREATE TABLE public.student (
    name character varying(80) NOT NULL,
    email character varying(80) NOT NULL,
    student_id character(10) NOT NULL,
    classroom_id character(10),
    password character varying(300),
    usn character varying(10) NOT NULL
);
    DROP TABLE public.student;
       public         postgres    false    3            �            1259    17637    subject    TABLE     �   CREATE TABLE public.subject (
    name character varying(50),
    subject_id character(10) NOT NULL,
    classroom_id character(10),
    subject_teacher_id character varying(10)
);
    DROP TABLE public.subject;
       public         postgres    false    3            �            1259    17603    teacher    TABLE       CREATE TABLE public.teacher (
    password character varying(300) NOT NULL,
    is_class_adviser boolean DEFAULT false,
    teacher_id character(10) NOT NULL,
    department_id character(10),
    name character varying(80) NOT NULL,
    email character varying(80) NOT NULL
);
    DROP TABLE public.teacher;
       public         postgres    false    3            n          0    17557    admin 
   TABLE DATA               @   COPY public.admin (name, email, admin_id, password) FROM stdin;
    public       postgres    false    185   K&       q          0    17621 	   classroom 
   TABLE DATA               W   COPY public.classroom (name, classroom_id, teacher_id, number_of_students) FROM stdin;
    public       postgres    false    188   '       o          0    17579 
   department 
   TABLE DATA               C   COPY public.department (department_id, admin_id, name) FROM stdin;
    public       postgres    false    186   c'       s          0    17647    student 
   TABLE DATA               W   COPY public.student (name, email, student_id, classroom_id, password, usn) FROM stdin;
    public       postgres    false    190   �'       r          0    17637    subject 
   TABLE DATA               U   COPY public.subject (name, subject_id, classroom_id, subject_teacher_id) FROM stdin;
    public       postgres    false    189   I(       p          0    17603    teacher 
   TABLE DATA               e   COPY public.teacher (password, is_class_adviser, teacher_id, department_id, name, email) FROM stdin;
    public       postgres    false    187   �(       �           2606    17681    admin admin_email_key 
   CONSTRAINT     Q   ALTER TABLE ONLY public.admin
    ADD CONSTRAINT admin_email_key UNIQUE (email);
 ?   ALTER TABLE ONLY public.admin DROP CONSTRAINT admin_email_key;
       public         postgres    false    185    185            �           2606    17561    admin admin_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.admin
    ADD CONSTRAINT admin_pkey PRIMARY KEY (admin_id);
 :   ALTER TABLE ONLY public.admin DROP CONSTRAINT admin_pkey;
       public         postgres    false    185    185            �           2606    17626    classroom classrooom_pkey 
   CONSTRAINT     a   ALTER TABLE ONLY public.classroom
    ADD CONSTRAINT classrooom_pkey PRIMARY KEY (classroom_id);
 C   ALTER TABLE ONLY public.classroom DROP CONSTRAINT classrooom_pkey;
       public         postgres    false    188    188            �           2606    17583    department department_pkey 
   CONSTRAINT     c   ALTER TABLE ONLY public.department
    ADD CONSTRAINT department_pkey PRIMARY KEY (department_id);
 D   ALTER TABLE ONLY public.department DROP CONSTRAINT department_pkey;
       public         postgres    false    186    186            �           2606    17651    student student_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.student
    ADD CONSTRAINT student_pkey PRIMARY KEY (student_id);
 >   ALTER TABLE ONLY public.student DROP CONSTRAINT student_pkey;
       public         postgres    false    190    190            �           2606    17641    subject subject_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.subject
    ADD CONSTRAINT subject_pkey PRIMARY KEY (subject_id);
 >   ALTER TABLE ONLY public.subject DROP CONSTRAINT subject_pkey;
       public         postgres    false    189    189            �           2606    17608    teacher teacher_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.teacher
    ADD CONSTRAINT teacher_pkey PRIMARY KEY (teacher_id);
 >   ALTER TABLE ONLY public.teacher DROP CONSTRAINT teacher_pkey;
       public         postgres    false    187    187            �           2606    17675 $   classroom classrooom_teacher_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.classroom
    ADD CONSTRAINT classrooom_teacher_id_fkey FOREIGN KEY (teacher_id) REFERENCES public.teacher(teacher_id) ON DELETE CASCADE;
 N   ALTER TABLE ONLY public.classroom DROP CONSTRAINT classrooom_teacher_id_fkey;
       public       postgres    false    187    188    2028            �           2606    17594 #   department department_admin_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.department
    ADD CONSTRAINT department_admin_id_fkey FOREIGN KEY (admin_id) REFERENCES public.admin(admin_id) ON DELETE CASCADE;
 M   ALTER TABLE ONLY public.department DROP CONSTRAINT department_admin_id_fkey;
       public       postgres    false    2024    185    186            �           2606    17657 !   student student_classroom_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.student
    ADD CONSTRAINT student_classroom_id_fkey FOREIGN KEY (classroom_id) REFERENCES public.classroom(classroom_id) ON DELETE CASCADE;
 K   ALTER TABLE ONLY public.student DROP CONSTRAINT student_classroom_id_fkey;
       public       postgres    false    190    2030    188            �           2606    17662 !   subject subject_classroom_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.subject
    ADD CONSTRAINT subject_classroom_id_fkey FOREIGN KEY (classroom_id) REFERENCES public.classroom(classroom_id) ON DELETE CASCADE;
 K   ALTER TABLE ONLY public.subject DROP CONSTRAINT subject_classroom_id_fkey;
       public       postgres    false    2030    189    188            �           2606    17670 '   subject subject_subject_teacher_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.subject
    ADD CONSTRAINT subject_subject_teacher_id_fkey FOREIGN KEY (subject_teacher_id) REFERENCES public.teacher(teacher_id) ON DELETE SET NULL;
 Q   ALTER TABLE ONLY public.subject DROP CONSTRAINT subject_subject_teacher_id_fkey;
       public       postgres    false    187    2028    189            �           2606    17616 "   teacher teacher_department_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.teacher
    ADD CONSTRAINT teacher_department_id_fkey FOREIGN KEY (department_id) REFERENCES public.department(department_id) ON DELETE CASCADE;
 L   ALTER TABLE ONLY public.teacher DROP CONSTRAINT teacher_department_id_fkey;
       public       postgres    false    2026    187    186            n   �   x�M���@Ek�+,��a�
��h��s� .3��׸$���䜐�ñ�������~V=I�R�,+�(��{b^F�.��*M,�V�fFUi�%p3�Y[AW��VT�I��ľ�u��zi��p.^���/d����+�/��rW�z�s}�#?v-cȈ�������ۛ�f��������醪Q�vB�	��H�      q   9   x�svUpT0Wv��L.NM442635�,K,N�+� �8���j�j�������� �=      o   B   x�KI-0426351�,.�LI-�r9��sJKR���3S�S�R\��3�RS�2�ҹb���� H��      s   �   x�m�1�0��>'�H� �q+�� mQ]��Am�zH��}���3w GV1����Մi w*�D6�]<i$�i��8�3JۧF�:���w'a�J_�z�l-.����c�R���O�=�A��U�      r   Y   x�s,-��MT(�H�/��L����8��S�S�����"0�+��(3/]!���CW���X�Q�487�$3��Ć��nv� �j*�      p   �   x�e�Oo�0 �3|����̛nh�m��٥bK�R>�����{ɻ��4@4����NU,�� ��=0��gn^�]�V�^h�ڝ��(࿙�)��Aʚ[`���Ph��z�eZ��'U�jg�>��
q��$�;7�PgM�������սn��@eY~�C|��� �Q���u�G�����H����͔�4\P��gFzE���f�`�v� B�G�����@��wԏ���?��g1     